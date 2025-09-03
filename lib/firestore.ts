import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export interface ConsultationFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
}

export async function submitConsultationForm(data: ConsultationFormData) {
  try {
    console.log("Attempting to submit to Firestore...");
    console.log("Firebase config:", {
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      // Don't log the full config for security
    });

    // Save to Firestore
    const consultationsRef = collection(db, "consultations");
    console.log("Collection reference created");

    const docRef = await addDoc(consultationsRef, {
      ...data,
      createdAt: serverTimestamp(),
      status: "pending",
    });

    console.log("Document successfully written with ID:", docRef.id);

    // Send email notification
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data,
        type: 'consultation',
      }),
    });

    const emailResult = await response.json();
    if (!emailResult.success) {
      console.warn("Email notification failed:", emailResult.error);
    }

    return {
      success: true,
      id: docRef.id,
    };
  } catch (error) {
    console.error("Error submitting consultation form:", error);
    // Log more detailed error information
    if (error instanceof Error) {
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}
