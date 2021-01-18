// GLOBAL_VARIABLES
const SEARCH_BOX_CLOSED_WIDTH = '50px';
const SEARCH_BOX_OPEN_WIDTH = '80vw';
const SEARCH_RESULTS_MIN_HEIGHT = '100px';
const SEARCH_RESULTS_MAX_HEIGHT = '300px';

// getElementById for EachElement
const content = document.getElementById('content');

const searchBox = document.getElementsByClassName('search-box')[0];
const searchResults = searchBox.children[0];
const input = searchBox.children[1];
const button = searchBox.children[2];
const searchContainer = searchBox.parentElement;
const wrapper = searchBox.parentElement.parentElement;

searchContainer.style.position = 'relative';

// Close Searchbox
document.addEventListener('click', (e) => {
  if (e.target !== button && e.target !== input && e.target !== button.firstElementChild) {
    searchContainer.style.position = 'relative';
    wrapper.style.position = 'static';
    searchBox.style.width = '50px';
    input.style.opacity = '0';
    input.value = '';
  }
});

// Open Searchbox && Execute Search if Input doesn't is empty
button.onclick = () => {
  searchContainer.style.position = 'static';
  wrapper.style.position = 'relative';
  searchBox.style.width = '80vw';
  input.style.opacity = '1';
  if (input.value !== '') {
    content.textContent = '';
    content.textContent = input.value;
  }
};

// Change Styles of the SearchResults, Input and Button
const changeStylesListenerAnEvent = () => {
  if (input.value === '') {
    searchResults.style.opacity = '0';
    searchResults.style.minHeight = '0px';
    searchResults.style.maxHeight = '0px';
    searchResults.style.zIndex = '-1';
    input.style.borderBottomLeftRadius = '10px';
    button.style.borderRadius = '10px';
  } else {
    searchResults.style.opacity = '1';
    searchResults.style.minHeight = '100px';
    searchResults.style.maxHeight = '300px';
    searchResults.style.zIndex = '5';
    input.style.borderBottomLeftRadius = '0';
    button.style.borderRadius = '0 10px 0 0';
    button.style.transition = '0.5s';
  }
};

document.addEventListener('keyup', () => changeStylesListenerAnEvent());
document.addEventListener('click', () => changeStylesListenerAnEvent());
