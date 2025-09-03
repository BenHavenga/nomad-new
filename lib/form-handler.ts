// import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";
// import { db } from "./firebase";
import { sendEmail } from "./email";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ConsultationFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

// Function to handle contact form submissions
export const submitContactForm = async (
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data,
        type: 'contact',
      }),
    });

    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to send email');
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
};

// Function to handle consultation form submissions
export const submitConsultationForm = async (
  data: ConsultationFormData
): Promise<{ success: boolean; error?: string }> => {
  try {
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

    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to send email');
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting consultation form:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
};
