#!/bin/bash

# Скрипт для инициализации базы данных в Docker контейнере

echo "🚀 Запуск инициализации базы данных..."

# Ожидание готовности базы данных
echo "⏳ Ожидание готовности базы данных..."
npx prisma db push --force-reset

# Применение миграций
echo "📦 Применение миграций..."
npx prisma migrate deploy

# Генерация Prisma Client
echo "🔧 Генерация Prisma Client..."
npx prisma generate

# Загрузка тестовых данных
echo "📊 Загрузка тестовых данных..."
node scripts/loadMockData.js

echo "✅ Инициализация завершена!"
