# ==========================================
# Stage 1: Build the React Application
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package manifests first for caching layers
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --frozen-lockfile || npm install

# Copy source code and static assets
COPY . .

# Build the production frontend distribution
RUN npm run build

# ==========================================
# Stage 2: Production Nginx Server
# ==========================================
FROM nginx:alpine

# Remove default nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy built static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Healthcheck for container monitoring
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/healthz || exit 1

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
