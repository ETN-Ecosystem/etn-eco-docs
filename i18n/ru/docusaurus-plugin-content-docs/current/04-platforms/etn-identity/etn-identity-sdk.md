---
sidebar_position: 2
title: ETN Identity SDK
description: Интеграция входа через ETN с помощью официального React SDK.
---

# ETN Identity SDK

**ETN Identity SDK** (@etn-ecosystem/identity-sdk) — это официальная библиотека React для интеграции аутентификации Экосистемы ETN в ваши децентрализованные приложения (dApps). Она упрощает процесс реализации потока OIDC Authorization Code Flow с PKCE.

## Установка

Установите пакет с помощью npm:

```bash
npm install @etn-ecosystem/identity-sdk
```

## Быстрый старт

### 1. Оберните ваше приложение

Оберните ваше корневое приложение в `ETNIdentityProivder`. Вам понадобится `clientId` из [Платформы учетных записей ETN](https://account.etnecosystem.org).

```tsx
// src/app/providers.tsx
"use client";

import { ETNIdentityProvider } from "@etn-ecosystem/identity-sdk";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ETNIdentityProvider
      clientId="YOUR_CLIENT_ID"
      redirectUri="http://localhost:3000/callback" // Ваш URL перенаправления
      scope="openid profile offline_access" // 'offline_access' обязателен для refresh tokens
    >
      {children}
    </ETNIdentityProvider>
  );
}
```

### 2. Добавьте кнопку входа

Используйте компонент `ETNConnectButton` для инициирования потока входа.

```tsx
import { ETNConnectButton } from "@etn-ecosystem/identity-sdk";

export default function LoginPage() {
  return (
    <div>
      <h1>Добро пожаловать</h1>
      <ETNConnectButton mode="light" />
    </div>
  );
}
```

### 3. Обработка обратного вызова (Callback)

Создайте страницу обратного вызова для обмена кодом авторизации на токены.

```tsx
// src/app/callback/page.tsx (Next.js App Router)
"use client";

import { useETNAuth } from "@etn-ecosystem/identity-sdk";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CallbackPage() {
  const { handleCallback, error } = useETNAuth();
  const router = useRouter();

  useEffect(() => {
    handleCallback()
      .then(() => {
        router.push("/dashboard");
      })
      .catch((err) => {
        console.error("Ошибка входа:", err);
      });
  }, []);

  if (error) return <div>Ошибка: {error.message}</div>;
  return <div>Загрузка...</div>;
}
```

### 4. Доступ к сессии

Используйте хук `useSession` для доступа к данным пользователя и токена доступа.

```tsx
import { useSession } from "@etn-ecosystem/identity-sdk";

export default function Dashboard() {
  const { session, isLoading } = useSession();

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <div>
      <h1>Привет, {session?.user?.name}</h1>
      <p>Ваш кошелек: {session?.user?.wallet_address}</p>
    </div>
  );
}
```

## API Справка

### ETNIdentityProvider Props

| Prop | Тип | Описание |
| :--- | :--- | :--- |
| `clientId` | string | ID вашего приложения (из панели управления). |
| `redirectUri` | string | URL, куда пользователь возвращается после входа. |
| `scope` | string | Запрашиваемые права (напр., `openid profile`). |
| `discoveryUrl` | string | (Опционально) URL OIDC Discovery. По умолчанию production. |

### useSession Hook

Возвращает:
*   `session`: Объект текущей сессии (`user`, `accessToken`, `expiresAt`).
*   `isLoading`: Boolean, идет ли проверка сессии.
*   `isAuthenticated`: Boolean, вошел ли пользователь.

## Устранение неполадок

*   **Ошибка CORS:** Убедитесь, что ваш `localhost` (или домен) добавлен в список разрешенных Origins в панели разработчика ETN.
*   **Redirect Mismatch:** `redirectUri` в коде должен *в точности* совпадать с тем, что указан в настройках приложения.
