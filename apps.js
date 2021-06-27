var apps = [
    {
        name: 'plex',
        title: 'plex.mtps.pl',
        content: "Plex Media Server. Serwer filmów, seriali, zdjęć i muzyki",
        link: 'https://plex.mtps.pl/'
    },
    {
        name: 'radio',
        title: 'radio-rolnik.mtps.pl',
        content: "Strona radia szkolnego Rolnika. Aktualna top lista utworów wybrana przez uczniów.",
        link: 'https://radio-rolnik.mtps.pl/'
    },
    {
        name: 'r',
        title: 'r.mtps.pl',
        content: "Serwer do skracania linków",
        link: 'https://r.mtps.pl/'
    },
    {
        name: 'send',
        title: 'send.mtps.pl',
        content: "Self hostowany serwer Firefox Send. Szyfrowany upload plików, z hasłem i datą wygaśnięcia",
        link: 'https://send.mtps.pl/'
    }
]

const head = document.querySelector('.pane.index>.head'),
    grid = document.querySelector('.pane.index>.grid')

for (let app of apps) {
    let description = document.createElement('div'),
        title = document.createElement('a'),
        link = document.createElement('i'),
        content = document.createElement('div'),
        element = document.createElement('div'),
        icon = document.createElement('i')

    description.append(title, link, content)
    element.append(app.name)
    element.append(icon)

    description.classList.add('description', app.name)
    title.classList.add('title')
    link.classList.add('link', 'icon-link-ext')
    content.classList.add('content')
    icon.classList.add('icon-link-ext')

    title.setAttribute('href', app.link)
    title.setAttribute('title', app.name)
    title.setAttribute('target', '_blank')
    element.setAttribute('data-target', app.name)
    element.setAttribute('data-link', app.link)

    title.textContent = app.title
    content.textContent = app.content

    head.append(description)
    grid.append(element)
}