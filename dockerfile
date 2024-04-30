# Используйте официальный образ Node.js как базовый образ для сборки приложения
FROM node:20 as build

# Установите рабочую директорию в контейнере
WORKDIR /app

# Копируйте файлы package.json и yarn.lock или package-lock.json
COPY package*.json ./

# Установите зависимости проекта
RUN npm install

# Копируйте исходный код проекта в контейнер
COPY . .

# Соберите приложение для production с помощью Vite
RUN npm run build

# Используйте официальный образ nginx для раздачи статических файлов
FROM nginx:stable-alpine

# Копируйте собранные файлы из предыдущего шага в директорию nginx для статических файлов
COPY --from=build /app/dist /usr/share/nginx/html

# Определите команду для запуска nginx
CMD ["nginx", "-g", "daemon off;"]

# Откройте порт 80
EXPOSE 80