{/* Checkout Api */}

export type CheckoutApiResponse = {
    sessionId: string;
}

{/* Submit Form Api */}

export type SubmitFormApiRequest = {
    email: string;
    name: string;
    message: string;
}

export type SubmitFormApiResponse = {
    id: string;
}