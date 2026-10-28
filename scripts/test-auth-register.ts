import 'dotenv/config';
import { auth } from '../src/lib/auth';

async function main() {
  const email = `qa_${Date.now()}@test.local`;
  const name = 'QA User';
  const password = '12345678';

  console.log('Intentando registrar usuario:', { email, name });

  try {
    const result = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });

    console.log('Registro exitoso');
    console.log(JSON.stringify(result, null, 2));
  } catch (error: any) {
    console.error('Error en registro');
    console.error(error?.message || error);
    console.error(error?.stack || '');
    process.exit(1);
  }
}

main();
