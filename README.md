# Front-End Challenge (Vue 2 + Vite)

This project uses vite and vue v2 with vuex and vue-router

## Steps to run it in docker

- First, clone the repository.

```
git clone https://github.com/JaLoXxD/polimundo-frontend-challenge
```

- After that, run docker.

- Go to the root folder.

  ![image](https://user-images.githubusercontent.com/65001908/177015699-2a77e317-840d-481b-99df-5e135d1210d6.png)

- Exec this command: 
 ```
 docker build -t vuejs-front2/dockerize-vuejs-app2 .
 ```
- Then, exec this command:
```
docker run -it -p 8080:8080 --rm --name dockerize-vuejs-app-1 vuejs-front2/dockerize-vuejs-app2
```
- Finally, open in the web browser the next url: http://127.0.0.1:8080/.

## Result

![image](https://user-images.githubusercontent.com/65001908/177004126-59ab1fc7-fc97-4389-9b0e-9ab0fe4b23fc.png)


## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
