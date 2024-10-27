# เลือก Base Image
# FROM <base-image>
FROM node:18

# กำหนด Workdir
# WORKDIR /app
WORKDIR /usr/src/app

# คัดลอกไฟล์
COPY package.json ./
RUN npm install

# คัดลอกโค้ดแอปพลิเคชัน
COPY index.js ./

# เปิด Port
EXPOSE 8000

# คำสั่งสำหรับรัน Container
CMD [ "node", "index.js" ]
