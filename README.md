This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




## Archivos reservados
layout.tsx -  
page.tsx - 
loading.tsx - 
not-found.tsx - 
error.tsx 
route (Archivos para endpoints API en route.ts)

## Carpetas 

### Segmentos 
meeti
    |- new

## Routing 

import Link from "next/link";
  <Link href="/nosotros">Nosotros</Link>

## Rendering 

Componenete de cliente y servidor 

Una de las principales caracterisitcas que tiene next desde que fue lanzado es renderizar el codigo de react en el servidor (SSR)
Server Side Renderer

En versiones anteioresel mismo codigo se ejecutaba primero en el servidor y despues en el cliente a esto se le llamo Hidratacion 

En versiones recientes de enxt el codigo se ejecuta en el servidor 


En los componentes de cliente se debe utilizar la directiva 

"use client"



Un componente ejecutado en el servidor no tiene interactividad, si se requere validar un formulario en el cliente,  escuchar un click 
lo ideal es convertirlo en cliente para eso se utiliza la directiva que se debe poner al principio del archivo "use client"

Cuando se crea componente de servidor y cliente el codigo es unidireccional 

#### Componentes de servidor de cliente y tambien Server components 

##### Diferencias 

SSR y RSC 

SSR y server comonentes 

El SSR es una tecnica de renderizado,  el servidor renderiza HTML completo (con los datos cargados) y lo envia al navegador Luego React eb ek ckuebte gace hydratacion para activar la interactividad

Los server components son un nuevo tipo de componentes qu se renderizan antes de tiempo, antes del bundling en un ambiente separado (el servidor) de react (Client o SSR).

Cuando los utiliza un server componentrs 
Obtener datos de un ORM o de un API 
Ejecutar funciones del servidor y acceder a recursos unicamente en el backent
Autenticacion apikeys o tokens 

Client components 

Cuando desees utilizar eventos o añadir interaccion a tus aplicaciones por medio de onClick onSubmit etc
Para utilizar los hooks 
Utilizar librerias que no se ejecutan el el servidor como Toast Zustand u otras que solo funcionan en el cliente 
Utilizar apis del navegador como LocalStorage notification aPI, Geolocation API, etc.

## METADATA en next 

Solo funcionan en RSC react server components en mis pages 

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meeti Next",
  description: "Proyecto Meeti Next, drizzle",
};

## FUENTES EN NEXT.JS 

En el archivo layout.ts 

import { Outfit, Open_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

## Dependencia para modificar el comportamiento de los heading 

Sirve para que los estilos de mis componentes sean un poco mas dinamicos 

npm i clsx

import clsx from "clsx"


type Props = {
    children: React.ReactNode
    level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = ({ children, level = 1 }: Props) => {

    const sizeMap: Record<number, string> = {
        1: 'text-4xl',
        2: 'text-3xl',
        3: 'text-2xl',
        4: 'text-xl',
        5: 'text-lg',
        6: 'text-base'

    }


    return (
        <h1 className={clsx(" font-black uppercase", sizeMap[level])}>
            {children}
        </h1>
    )
}

## Arquitectura Utilizada 

### Feature-Based Architecture 

Es un patron de organizacion de codigo donde la estructura del proyecto se organiza por caracteristicas o funcionalidades del negocio en lugar de por tipo tecnico de archivo (components, hooks, utils, etc)

#### Ventaja 

Estalabilidad mejorada A medida que tu proyecto crece agragar nuevas features no afecta las existentes puedes tener 50 features si nque el proyecot se vuelva inmanejable

Mantenimiento mas sencillo todo e lcodigo relacionado con una funcionalidad esta en un solo lugar. Si necesitas modificar el sistema de autenticacion sabes exsctamente donde buscar 

Desarrollo en equipos   es mas eficiente: Diferentes desarrolladores pueden trabajar en diferentes features con minimos conflictos de merge. el equipo de pagos trabaja en la carpeta de pagos y el de usuarios trabaja en la carpeta de usuarios

se tiene menos acoplamiento los features estan aisladas unas de otros lo que reduce dependencia inncesarias y hace el codigo mas modular.
Outboardind mas rapido los nuevos desarrolladores entienden mas rapido la estructura por que esta organizado por funcionalidades de negocio no por tecnicismos.

AppRoutes de next.js se ainea naturalmente con este patron .

Server components y client components se puede organizar mejor dentro de cada feaure

API routes pueden vivir junto al codigo que los consumen
 ademas facilita la eliminacion de codigo muerto y permite exportar features como paquetes si en el futuro qieres modularizar mas. 


Los proyectos que a se benefician con esta arquitectura FBA son los proyecots grandes y empresariales como ASS con dasboards con multiples modulos 
ecommece  y markplace 
CRM 
ERP 

## libreria para gestionar 

ReacHookForm
npm install react-hook-form
npm i @hookform/resolvers 
npm i zod


## Actions Server Actions o Server Functions

Son funciones asincronas que se ejecutan en el servidor , se pueden utilizar con componetes de cleinte o servidor

Se utilizan para crear datos o mutarlos y enstan muy unidos al CRUD

Utilizan la directiva "use server" que ne el caso de componentes de servidor debe ser la primera linea de la funiocn mientras que client components se deben importar de otro archivo que en la parte superior debe tener esta directiva.

Si se utilizan en un formulario puedes llamar directamente el Server Action o Server Function en el atributo action="" del form.

Tambien pueden ser llamados dentro de un useEffect, al presionar un boton o al ejecutar un formulario con codigo.

Es algo de react pero lo toma en next. 


## Drizzle ORM 
NEON bdd servicio de postgress 

Es un ORM Headless basado en Ts
En su documentacion encontraras Headless with a head
Significa que no tiene una interfaz por lo tanto es un ORM que provee una serie de metodos para interactuar con tu base de datos pero no tiene una interfaz atada con tu proyecto. 

Pero se dice "with a head" por que tiene una serie de carateristica muy especificos 

su principal caracteristica es un gran performance debido a que no viene con funciones innecesarias ni componentes para la interfaz el performance de Drizzle ORM es una de sus principales caracteristicas.

Tiene una sintaxis de bdd relacional y tambien como SQL 

Es ligero soporta Ts para tipado seguro y puede ser utilizado en una gran cantidad de base de datos y proveedores.

Puede ser utilizado en postgresSQL mySQL, SQLite 
Tambien puede ser utilizado con Neon VercelPostgres Prisma Postgres supabase bun SQL etc.

Instalacion de drizzle 

npm i drizzle-orm@beta pg dotenv
npm i drizzle-orm@beta pg dotenv --legacy-peer-deps
npm i drizzle-orm pg dotenv --legacy-peer-deps
npm i -D drizzle-kit@beta  @types/pg tsx
npm i -D drizzle-kit --legacy-peer-deps

creamos drizzle.config.ts para configuracion 
y db/index.ts para la bdd 

## Schemas en DrizzleORM 

Las tablas o columnas que tendra la bdd se define por medio de schemas
Tu schema sera utilizado como la fuente de la verdad para futuras modificaciones en tus consultas y migraciones.

Tu schema puede ser sinronizado hacia la bdd con la herramienta drizzle-kit 

Recomendaciones 

Se pueden tener en un solo archivo o en multiples 
Tambien es posible tener todo lo relacionado a una entidad en un schema por ejemplo Producto y Categorias.

### Migrations Drizzle ORM 

En bdd las migraciones son archivos que describen los cambios que se deben aplicar al schema de la base de datos; algunos de sus usos son crear tablas añadir relaciones, modificar tipos de datos, agregar columnas nuevas.

Entre sus ventajas es que podras llevar un historial de cambios, asi como poder tener la misma estrctura en desarrollo prueba y produccion. En case de error puedes volver a una migracion previa.

Las migraciones en Drizzle se hacen por medio de drizzle-kit.

#### Comandos 

Los comandos disponibles en drizzle-kit son generate migrate push, pull,export, check y studio.

La sintaxis para utilizarlos en la teminal es 
            ´´´ npx drizzle-kit [comando] 
            ´´´
1. Generate.-
   Genera archivos de migraciones a partid de tu esquema 
  No ejecuta nada en la base de datos, solo crea los archivos SQL necesario para luego correrlos. 
                ´´´ npx drizzle-kit generate 
                ´´´

2. Migrate.-
   Ejecuta los archivos de migraciones en la base de datos, mantiene un historial de que migaciones ya se aplicaron. 
                ´´´ npx drizzle-kit migrate 
                ´´´
3. Push.-
   Sincroniza la base de datos con el esquema sin generar archivos. util para desarrollos rapidos no se tiene un hisotrial de cambios. Solo puedes utilizar una de las dos migrate o push.
                ´´´ npx drizzle-kit push 
                ´´´
4. Pull.-
   Genera migraciones a partir de los cambios en la base de datos, lee la estrucutra actual de la base de datos y genera un esquema de Drizzlw a partir de ella. MUY UTIL SI YA TIENES UNA db EXISTENTE Y QUIERES empezar con Drizzle. 

                ´´´ npx drizzle-kit pull 
                ´´´
5. Studio.-
   Abre una interfaz visual para ver tu base de datos y ejecutar consultas, abre una interfaz visual es como un pgadmin.

                ´´´ npx drizzle-kit studio 
                ´´´
6. Export.-
   Genera un archivo SQL con las migraciones, sirve para respaldos.
                ´´´ npx drizzle-kit export 
                ´´´
7. Check.-
   Comprueba si hay discrepancias entre tu esquema y la base de datos 
                ´´´ npx drizzle-kit check 
                ´´´

# BETTER AUTH 
 Es un framework de autenticacion para TS
Puede ser utilizado en diferentes Frameworks como Nextjs, Nuxt, Astro, Remix, SvelteKit, SolidStart o TanStack Start. 

Se pueden utilizar en frameworks de backend como Hono, Fastify, Express, NestJS o Elysia.

Tiene autenticacion solial o por email y password permite manejar las sesiones y cuentas. 

Diseño de la bdd y acceder a toda la inofrmacion 
Una gran cantidad de pluggins 

Rate limiter para evitar muchas teticiones hacia tu backend.


## Instalacion y configuracion de Better Auth 

Configuracion exclusiva para next y drizzle si necesitas otro es una configuracion diferente. 

npm i better-auth
npm i better-auth --force 

Archivo de schema de bdd en db/schema comunity 
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const comunity = pgTable('comunity', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 255 }).notNull()

})

archivo db en src/db index.ts

import { drizzle } from 'drizzle-orm/node-postgres'

export const db = drizzle(
    process.env.DATABASE_URL!, {

}

)

archivo drizzle.config.ts en la raiz del proyecto drizzle.config.ts

import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    out: './drizzle',
    schema: './src/db/schema',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
})

archivo db en src/lib

import { drizzle } from 'drizzle-orm/node-postgres'

export const db = drizzle(
    process.env.DATABASE_URL!, {

}

archivo auth.ts en src/lib

import { betterAuth } from "better-auth"
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { nextCookies } from 'better-auth/next-js'
import { db } from '../db/index'

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: 'pg',
        usePlural: true
    }),
    plugins: [nextCookies()]

})

variables de entorno 
BETTER_AUTH_SECRET=secret_better_auth
BETTER_AUTH_URL=http://localhost:3000


app/api/auth/[...all]/route.ts

import { toNextJsHandler } from 'better-auth/next-js'
import { auth } from '@/lib/auth'

export const { GET, POST } = toNextJsHandler(auth)  

--------
npx @better-auth/cli@latest generate
se crea el archivo auth-schema.ts en la raiz del proyecto

Se debe modificar las relaciones Luego una ves teniendo los dos archivos 

npx drizzle-kit generate 
npx drizzle-kit migrate  

## Para ver los mensajes enviados desde el auth de better 
 npm i react-hot-toast

En el layout principal 
import { Toaster } from "react-hot-toast";
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${outfit.variable}  h-full bg-white antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}

### Como acceder a datos en drizzle orm 
dirzzle ofrece un sintaxis tipo SQL para consultar los datos de tu base de datos 
encontraras funciones llamadas select, insert update delete join; por lo tanto si sabes SQL sera facil aprender drizzle

Ofrece 2 frunciones para obtener datos: Select y query 

Query ofrece una sintaxis mas al estilo Query Builder. Mientra que select es mas al estilo SQL. 

## select
            db.select().from(users).limit(5).orderBy(desc(users.id)

## Query
            db.query.users.findFirst({
              where: (users) => eq(users.name, 'Felipe')
              limit(5),
              orderBy : (users, {desc}) => [desc(users.id)]
            })

# mailtrap para centralizar los correos 
https://mailtrap.io/onboarding

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5ff34d09e46c2b",
    pass: "8b6f439699ca16"
  }
});

transport.sendMail({
  from: "Private Person <from@example.com>",
  to: "A Test User <to@example.com>",
  subject: "Hello from Mailtrap",
  text: "This is a test e-mail message."
}, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
});


dependencia 
https://nodemailer.com/

## Iconos 
npm i @heroicons/react @headlessui/react

npm i @heroicons/react 
npm i @headlessui/react

