const onBodyLoadHandler = () => {
    const preloadArea = document.querySelector('.preload')
    preloadArea.classList.add('hidden')
    document.body.classList.remove('still-load')
}