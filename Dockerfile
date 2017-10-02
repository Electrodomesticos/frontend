FROM node:6.11.3
RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/frontend
RUN mkdir $HOME
WORKDIR $HOME

RUN npm install -g @angular/cli@latest
COPY package.json $HOME/package.json
RUN npm install && npm cache clean
COPY . /frontend

EXPOSE 4200
EXPOSE 49153

CMD ["npm", "start", "--host=0.0.0.0"]