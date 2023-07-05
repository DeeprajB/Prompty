<br  />
<p  align="center">
<a href="https://github.com/DeeprajB/prompty">
<img src="./public/assets/images/prompty.png" alt="Logo" width="100" height="100"></a>
<h1  align="center">Prompty</h1>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## About The Project

![HomePage](https://i.ibb.co/kXkxDzy/Home.png)<br />
Prompty is an open-source AI prompting tool for modern world to discover, create & share creative prompts.
<br />

### Built With

* [Next 13](https://nextjs.org/)
* [Node](https://nodejs.org/en/)
* [Tailwind CSS](https://tailwindcss.com/)
* [MongoDB](https://www.mongodb.com/)

## Screenshots
### Create Prompt
![Create](https://i.ibb.co/wKw3MFS/Create.png)<br/>
### Edit Prompt
![Edit](https://i.ibb.co/mtKVrY7/Edit.png)<br/>
### Search Prompts, Tags or Users.
![Search](https://i.postimg.cc/vZ0VhMc7/Search.png)<br/>
### User Profile Page
![Profile](https://i.ibb.co/rmChzRC/Profile.png)

## Installation

1. Get API keys for GoogleAuth and MONGODB.
2. Clone the repo
   ```sh
   git clone https://github.com/DeeprajB/prompty.git
   cd prompty
   ```
3. Make a .env file which has the same keys as below
   ```sh
    GOOGLE_ID =
    GOOGLE_CLIENT_SECRET =
    MONGODB_URI =
    NEXTAUTH_URL = http://localhost:3000
    NEXTAUTH_URL_INTERNAL = http://localhost:3000
    NEXTAUTH_SECRET =
   ```

4. Installing and running prompty
   ```sh
   npm install
   npm run dev
   ```
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
