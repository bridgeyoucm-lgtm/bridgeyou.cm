import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

interface LeadData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  need: string;
  budget?: string;
  message?: string;
}

const handler: Handler = async (event: HandlerEvent, _context: HandlerContext) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Parse the request body
  let data: LeadData;
  try {
    data = JSON.parse(event.body || '{}');
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON body' }),
    };
  }

  // Validate required fields
  const requiredFields: (keyof LeadData)[] = ['name', 'email', 'phone', 'need'];
  const missingFields = requiredFields.filter((field) => !data[field]);

  if (missingFields.length > 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'Missing required fields',
        fields: missingFields,
      }),
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid email format' }),
    };
  }

  // Log the lead (in production, you would send this to your CRM, email service, etc.)
  console.log('=== NEW LEAD RECEIVED ===');
  console.log('Name:', data.name);
  console.log('Company:', data.company || 'N/A');
  console.log('Email:', data.email);
  console.log('Phone:', data.phone);
  console.log('Need:', data.need);
  console.log('Budget:', data.budget || 'Not specified');
  console.log('Message:', data.message || 'No message');
  console.log('Timestamp:', new Date().toISOString());
  console.log('========================');

  // Return success response
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      success: true,
      message: 'Lead received successfully',
      data: {
        name: data.name,
        email: data.email,
        timestamp: new Date().toISOString(),
      },
    }),
  };
};

export { handler };

