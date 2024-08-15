onload = () => {
    let btnScrollTop = document.getElementById("scroller");

    btnScrollTop.onclick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const scrollHandler = () => {
        if (
            document.body.scrollTop > 200 ||
            document.documentElement.scrollTop > 200
        ) {
            btnScrollTop.style.display = "block";
        } else {
            btnScrollTop.style.display = "none";
        }
    };

    document.addEventListener("scroll", scrollHandler);
    window.onload = scrollHandler;

    var projects_container = document.getElementById("projects_container");

    var projects = [
        {
            title: "Aquarium Landing Page",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aliquam necessitatibus nihil? Cumque similique dicta earum veritatis et explicabo nisi cupiditate, iste asperiores amet veniam eligendi, odit iure quaerat eum.",
            image: "images/screenshots/aquarium.png",
            link: "./aquarium/index.html",
            a: "./images",
            external: false
        },
        {
            title: "Authentication Page",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aliquam necessitatibus nihil? Cumque similique dicta earum veritatis et explicabo nisi cupiditate, iste asperiores amet veniam eligendi, odit iure quaerat eum.",
            image: "./images/screenshots/auth.png",
            link: "./auth/index.html",
            external: false
        },
        {
            title: "Globe Express",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aliquam necessitatibus nihil? Cumque similique dicta earum veritatis et explicabo nisi cupiditate, iste asperiores amet veniam eligendi, odit iure quaerat eum.",
            image: "./images/screenshots/globe_express.png",
            link: "./globe_express/index.html",
        },
        {
            title: "3D Hotel Landing Page",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aliquam necessitatibus nihil? Cumque similique dicta earum veritatis et explicabo nisi cupiditate, iste asperiores amet veniam eligendi, odit iure quaerat eum.",
            image: "./images/screenshots/hotel.png",
            link: "./hotel/index.html",
            external: false
        },
        {
            title: "Netflix Clone",
            desc: "A Netflix UI clone.",
            image: "./images/screenshots/netflix.png",
            link: "./netflix/index.html",
            external: false
        },
        {
            title: "Pizza Website",
            desc: "A Pizza ordering website UI",
            image: "./images/screenshots/pizza.png",
            link: "./pizza/index.html",
            external: false
        },
        {
            title: "Music Player UI",
            desc: "A Music Player UI",
            image: "./images/screenshots/music_player.png",
            link: "./player3/index.html",
            external: false
        },
        {
            title: "Vital Business Services",
            desc: "Vital Business Services is a transformation vehicle providing business and operational intelligence solutions aimed at propelling organizations of all sizes to greater heights.",
            image: "./images/screenshots/vbs.png",
            link: "https://vbservices.co.za/",
            external: true
        },
    ];

    projects.map((project, id) => {
        let project_div = document.createElement("div");
        project_div.classList.add("col-lg-3");
        project_div.classList.add("col-md-3");
        project_div.classList.add("col-sm-3");
        project_div.classList.add("bg-secondary");
        project_div.classList.add("p-2");
        project_div.classList.add("m-1");
        project_div.classList.add("d-flex");
        project_div.classList.add("align-items-center");
        project_div.classList.add("flex-column");
        project_div.style.borderRadius = ".2em";

        let img = document.createElement("img");
        img.src = project.image;
        img.style.width = "90%";
        img.style.borderRadius = ".2em";
        project_div.appendChild(img);

        let details_div = document.createElement("div");
        details_div.classList.add("py-1");
        details_div.classList.add("d-flex");
        details_div.classList.add("align-items-center");
        details_div.classList.add("flex-column");

        let title = document.createElement("h2");
        title.innerHTML = project.title;
        title.classList.add("text-center");
        details_div.appendChild(title);

        // let desc = document.createElement("p");
        // desc.innerHTML = project.desc;
        // desc.classList.add("w-100");
        // desc.classList.add("px-2");
        // desc.classList.add("text-center");
        // details_div.appendChild(desc);

        let btn = document.createElement("button");
        btn.classList.add("btn");
        btn.classList.add("btn-info");
        btn.innerHTML = "VIEW SITE";
        details_div.appendChild(btn);

        btn.addEventListener("click", (e) => {
            if(project.external) {
                window.open(project.link, '_blank').focus();
            } else {
                document.getElementById("modal").style.display = "flex";
                document.getElementById("iframe").src = project.link;
            }
        });

        project_div.appendChild(details_div);

        projects_container.appendChild(project_div);
    });

    document.getElementById("close").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
    });
};
