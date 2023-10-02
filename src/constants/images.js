const Theme = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>

const Home = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

const Mail = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

const Font = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M15 4h7v2h-7zm1 4h6v2h-6zm2 4h4v2h-4zM9.307 4l-6 16h2.137l1.875-5h6.363l1.875 5h2.137l-6-16H9.307zm-1.239 9L10.5 6.515 12.932 13H8.068z"></path></svg>

const Search = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" />
  <path d="M11.412 8.58599C11.791 8.96599 12 9.46799 12 9.99999H14C14.0009 9.47442 13.8976 8.95389 13.6961 8.46848C13.4946 7.98307 13.1988 7.54242 12.826 7.17199C11.312 5.65999 8.687 5.65999 7.174 7.17199L8.586 8.58799C9.346 7.82999 10.656 7.832 11.412 8.58599Z" />
</svg>

const Filter = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path></svg>

const Checkbox = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="black" />
</svg>

const CheckboxActive = (<svg width="16" height="16" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="black" />
  <path className="checkmark" d="M3.69669 12.0104C3.11091 11.4246 3.11091 10.4748 3.69669 9.88905L12.8891 0.696664C13.4749 0.110878 14.4246 0.110878 15.0104 0.696664C15.5962 1.28245 15.5962 2.2322 15.0104 2.81798L5.81802 12.0104C5.23223 12.5962 4.28248 12.5962 3.69669 12.0104Z" fill="white" />
  <path className="checkmark" d="M1.01024 7.11108C1.62387 6.49745 2.61876 6.49745 3.23239 7.11108L5.64253 9.52121C6.25616 10.1348 6.25616 11.1297 5.64253 11.7434C5.0289 12.357 4.034 12.357 3.42037 11.7434L1.01024 9.33323C0.396611 8.7196 0.396611 7.72471 1.01024 7.11108Z" fill="white" />
</svg >)


export { Theme, Mail, Home, Font, Search, Filter, Checkbox, CheckboxActive }