FROM launcher.gcr.io/google/nodejs

# Install node.js 4.6.1
RUN npm cache clean -f
RUN npm install -g n
RUN n stable

ADD . /servicenet-desafio
WORKDIR /servicenet-desafio

RUN npm install
RUN npm install -g @angular/cli


# Copy application code.
COPY . /app/

ADD . /servicenet-desafio
WORKDIR /servicenet-desafio

# expose port 4200
EXPOSE 8080

CMD ["ng","serve", "--port", "8080"] 
