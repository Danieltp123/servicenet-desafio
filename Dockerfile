FROM launcher.gcr.io/google/nodejs

# Install node.js 4.6.1
RUN install_node v4.6.1


# Copy application code.
COPY . /app/

ADD . /servicenet-desafio
WORKDIR /servicenet-desafio



# Install dependencies.
RUN npm install
RUN npm install -g angular
RUN ng serve --port 8080