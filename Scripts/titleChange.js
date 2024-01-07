window.addEventListener("load",
  function () {
    const favicon = document.getElementById('favicon')
    const pageTitle = document.title
    const attentionMessage = 'Come back'

    document.addEventListener('visibilitychange', function (e) {
      const isPageActive = !document.hidden
      if (isPageActive) {
        document.title = pageTitle
        favicon.href = '/images/dinesh.jpg'
      } else {
        document.title = attentionMessage
        favicon.href = '/images/folded.png'
      }
    })
  }
)
