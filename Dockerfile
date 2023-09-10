FROM nginx:alpine
COPY /build /usr/share/nginx/html
COPY /nginx/yin-web /etc/nginx/sites-available/yin-web
COPY /nginx/yin-web /etc/nginx/sites-enabled/yin-web
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]