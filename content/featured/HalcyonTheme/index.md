---
date: '1'
title: 'Secured User String Database'
cover: './arch.png'
github: 'https://github.com/Terre8055/sus-db'
external: 'https://github.com/Terre8055/sus-db/wiki/Data-Persistency-Architecture'
tech:
  - Python
  - Docker
  - Argon2
---

A Python-based solution for secure and efficient user data management. Utilizes multiple layers of hashing and encryption, including id generation for storage identification.
The idea behind this project is to accelerate ideation without the hassle of setting up a relational or non-relational database.

```sh
  mkdir -p $HOME/sus-db/ && touch $HOME/sus-db/susdb.log
  docker run --name dorwizard -v /path/to/home/sus-db/:/path/to/home/sus-db/ -it terre8055/susdb:0.0.1 
```
