FROM nginx:alpine
COPY /build /usr/share/nginx/html
COPY /nginx/sites-available /etc/nginx/sites-available
COPY /nginx/sites-enabled /etc/nginx/sites-enabled
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]