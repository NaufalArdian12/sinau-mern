FROM node:20

# Install pnpm globally
RUN npm install -g pnpm

WORKDIR /app

# Salin file lock + package untuk caching
COPY pnpm-lock.yaml ./
COPY package*.json ./
RUN pnpm install

# Salin semua source code backend
COPY . .

EXPOSE 3000
CMD ["pnpm", "run", "dev"]
