# ⚡️ Electro React TypeScript Tailwind ShadCN Boilerplate

Plantilla moderna y modular para crear aplicaciones de escritorio utilizando **Electron**, **React**, **Tailwind CSS**, **TypeScript** y **ShadCN UI**.

Este repositorio es ideal para quienes desean comenzar rápido con un stack moderno, soportado por [`electron-vite`](https://electron-vite.org), y enfocado en productividad y rendimiento.

---

## 🧹 Características principales

✅ Basado en [electron-vite](https://electron-vite.org)
✅ UI reactiva con [React 19](https://react.dev/)
✅ Componentes reutilizables con [ShadCN/UI](https://ui.shadcn.com)
✅ Estilos ultrarrápidos con [Tailwind CSS 4](https://tailwindcss.com)
✅ Control total con [TypeScript](https://www.typescriptlang.org)
✅ Empaquetado multiplataforma con [electron-builder](https://www.electron.build)
✅ Routing con [React Router 7](https://reactrouter.com)
✅ Soporte para preload y comunicación segura main-renderer
✅ Listo para auto-actualizaciones con `electron-updater`
✅ Estructura limpia, modular y escalable
✅ 🔒 Protección del Código Fuente
✅ 🔥 Hot Reloading
✅ 🚀 Fast HMR
✅ ⚡ Vite Powered

---

## 🩰 Tecnologías utilizadas

| Tecnología           | Propósito                              |
| -------------------- | -------------------------------------- |
| Electron             | Contenedor de aplicación de escritorio |
| React 19             | UI declarativa y modular               |
| Tailwind CSS         | Utilidades de estilo modernas          |
| ShadCN UI            | Componentes accesibles y estilizados   |
| Vite + Electron Vite | Bundler rápido, HMR para Electron      |
| TypeScript           | Tipado seguro para frontend y backend  |
| Electron Builder     | Compilación multiplataforma            |
| React Router         | Routing completo                       |
| Lucide React         | Íconos modernos                        |

---

## ⚙️ Requisitos

- Node.js `>=18`
- Git
- Bun (opcional, pero soportado)
- Sistema operativo:

  - ✅ Windows 10/11
  - ✅ macOS (Intel/Apple Silicon)
  - ✅ Linux (deb/snap/appimage)

---

## 🚀 Cómo iniciar

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/electro-react-boilerplate.git
cd electro-react-boilerplate

# Instala dependencias (usa npm o bun)
npm install

# Ejecuta en modo desarrollo
npm run dev
```

---

## 🛠️ Scripts disponibles

| Comando               | Descripción                       |
| --------------------- | --------------------------------- |
| `npm run dev`         | Modo desarrollo con hot-reload    |
| `npm run build`       | Compila el código para producción |
| `npm run build:win`   | Crea un instalador para Windows   |
| `npm run build:mac`   | Crea un instalador para Mac       |
| `npm run build:linux` | Crea un instalador para Linux     |
| `npm run lint`        | Linter con ESLint                 |
| `npm run format`      | Formateo con Prettier             |
| `npm run typecheck`   | Validación de tipos en Node y Web |

---

## 📁 Estructura de carpetas

```
.
├── build/                    # Archivos de recursos e íconos
├── resources/                # Archivos para empaquetado (asar)
├── src/
│   ├── main/                 # Código del proceso principal
│   ├── preload/              # Preload y contexto seguro
│   └── renderer/
│       └── src/
│           ├── components/   # Componentes de UI
│           ├── lib/          # Utilidades generales
│           ├── pages/        # Rutas/Pages
│           └── App.tsx       # Raíz de la aplicación React
├── electron-builder.yml      # Configuración de compilación
├── electron.vite.config.ts   # Configuración de electron-vite
└── README.md
```

---

## 📦 Instalación por pasos

> ⚠️ Este proyecto usa **Bun**, pero también funciona con `npm`. Los siguientes pasos están explicados usando **npm**.

### 01. Crear el proyecto base

```bash
npm create @quick-start/electron@latest
```

### 02. Instalar Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

#### 🔧 Configuración de plugin Vite

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()]
})
```

> ⚠️ Importante: para que funcione correctamente, en `tsconfig.node.json` debes usar:

```json
"module": "esnext",
"moduleResolution": "bundler"
```

Puedes seguir la [guía oficial de Tailwind para Vite](https://tailwindcss.com/docs/installation/using-vite).

### 03. Instalar ShadCN UI

Sigue la guía oficial: [https://ui.shadcn.com/docs/installation/manual](https://ui.shadcn.com/docs/installation/manual)

> ⚠️ Si usas **Bun**, debes eliminar la línea del `package.json`:

```json
"postinstall": "electron-builder install-app-deps"
```

> De lo contrario, `shadcn-ui` fallará al instalar.

---

## 🔊 Tips de desarrollo

- Para abrir más ventanas, usa IPC + `BrowserWindow` en el proceso principal.
- Puedes usar `contextBridge` para exponer APIs de Electron de forma segura.
- Personaliza el título y los íconos desde `electron-builder.yml`.

---

## 📦 Distribución

```bash
# Para crear el instalador de Windows:
npm run build:win

# Para macOS o Linux:
npm run build:mac
npm run build:linux
```

---

## 📜 Licencia

[MIT](LICENSE)

---

## 💡 Inspirado por

- [Electron Vite](https://github.com/electron-vite/electron-vite)
- [ShadCN/UI](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)

---

¿Quieres contribuir? ¡Abre un PR o Issue y mejora este boilerplate para todos! ⭐
