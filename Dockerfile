FROM alpine: latest
MAINTAINER sarishinohara

# update alpine linux
RUN apk atualização e atualização apk && \
    apk adicionar nodejs && \
    # pode comentar esta linha no meu computador.
    apk adicionar nodejs-npm && \
    npm install -g @ angular / cli @ 1.1.0-rc.2

# adicionar código-fonte às imagens
ADD . / loklak-message-publisher

# mudar diretório de trabalho
WORKDIR / loklak-message-publisher

# instalar dependências
RUN npm install

# expor a porta 8080
EXPONHA 8080

# run ng serve no localhost
CMD [ "ng" , "serve" , "--host" , "0.0.0.0" , "--disable-host-check" ]
