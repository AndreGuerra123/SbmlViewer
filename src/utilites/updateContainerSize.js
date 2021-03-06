export function updateContainerSize () {
  console.log('size')
  let newMargin = document.getElementById('optionsArea').clientHeight + 15 + 'px'
  document.getElementById('content').style.marginTop = newMargin

  let sideBar = document.getElementById('sidebarContent')
  if (sideBar) {
    sideBar.style.top = 4 * parseInt(newMargin) + 'px'
    sideBar.style.height =
      document.documentElement.clientHeight - document.getElementById('optionsArea').clientHeight - 7 + 'px'
  }
  let mainContent = document.getElementById('mainContent')
  if (mainContent) {
    mainContent.style.height =
        document.documentElement.clientHeight - document.getElementById('optionsArea').clientHeight - 14 + 'px'
  }
}
