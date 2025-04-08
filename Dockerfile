# Use a lightweight NGINX image
FROM nginx:alpine

# Copy your frontend files into nginx's public folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
