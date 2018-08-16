FROM launcher.gcr.io/google/nodejs

# Install node.js 4.6.1
RUN install_node v4.6.1

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
