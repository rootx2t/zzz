'use server';

export async function submitContact(prevState: any, formData: FormData) {
  try {
    const projectName = formData.get('projectName');
    const name = formData.get('name');
    const email = formData.get('email');
    const website = formData.get('website');
    const message = formData.get('message');

    // Validation
    if (!projectName || !name || !email || !message) {
      return {
        success: false,
        error: 'Please fill in all required fields',
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email as string)) {
      return {
        success: false,
        error: 'Please enter a valid email address',
      };
    }

    // In a real app, you would send this to your email service
    // For now, we'll just log it and return success
    console.log('Contact form submission:', {
      projectName,
      name,
      email,
      website,
      message,
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      error: '',
    };
  } catch (error) {
    return {
      success: false,
      error: 'An error occurred. Please try again.',
    };
  }
}
