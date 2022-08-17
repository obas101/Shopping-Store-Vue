<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="sbx-icon-search-11"
        viewBox="0 0 40 40"
      >
        <path
          d="M15.553 31.106c8.59 0 15.553-6.963 15.553-15.553S24.143 0 15.553 0 0 6.963 0 15.553s6.963 15.553 15.553 15.553zm0-3.888c6.443 0 11.665-5.222 11.665-11.665 0-6.442-5.222-11.665-11.665-11.665-6.442 0-11.665 5.223-11.665 11.665 0 6.443 5.223 11.665 11.665 11.665zM27.76 31.06c-.78-.78-.778-2.05.004-2.833l.463-.463c.783-.783 2.057-.78 2.834-.003l8.168 8.17c.782.78.78 2.05-.003 2.832l-.463.463c-.783.783-2.057.78-2.833.003l-8.17-8.167z"
          fill-rule="evenodd"
        />
      </symbol>
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        id="sbx-icon-clear-2"
        viewBox="0 0 20 20"
      >
        <path
          d="M8.96 10L.52 1.562 0 1.042 1.04 0l.522.52L10 8.96 18.438.52l.52-.52L20 1.04l-.52.522L11.04 10l8.44 8.438.52.52L18.96 20l-.522-.52L10 11.04l-8.438 8.44-.52.52L0 18.96l.52-.522L8.96 10z"
          fill-rule="evenodd"
        />
      </symbol>
    </svg>

    <form
      novalidate="novalidate"
      onsubmit="return false;"
      class="searchbox sbx-custom"
    >
      <div role="search" class="sbx-amazon__wrapper">
        <input
          type="search"
          name="search"
          placeholder="Search products, brands and categories"
          autocomplete="off"
          required="required"
          class="sbx-custom__input"
        />
        <button
          type="submit"
          title="Submit your search query."
          class="sbx-custom__submit"
        >
          <svg role="img" aria-label="Search">
            <use xlink:href="#sbx-icon-search-11"></use>
          </svg>
        </button>
        <button
          type="reset"
          title="Clear the search query."
          class="sbx-custom__reset"
        >
          <svg role="img" aria-label="Reset">
            <use xlink:href="#sbx-icon-clear-2"></use>
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Searchbar",
};
</script>

<style scoped>
.sbx-custom {
  display: inline-block;
  position: relative;
  width: 600px;
  height: 39px;
  white-space: nowrap;
  box-sizing: border-box;
  font-size: 14px;
}

.sbx-custom__wrapper {
  width: 100%;
  height: 100%;
}

.sbx-custom__input {
  display: inline-block;
  -webkit-transition: box-shadow 0.4s ease, background 0.4s ease;
  transition: box-shadow 0.4s ease, background 0.4s ease;
  border: 0;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px #ffffff;
  background: #ffffff;
  padding: 0;
  padding-right: 75px;
  padding-left: 11px;
  width: 100%;
  height: 39px;
  vertical-align: middle;
  white-space: normal;
  font-size: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.sbx-custom__input::-webkit-search-decoration,
.sbx-custom__input::-webkit-search-cancel-button,
.sbx-custom__input::-webkit-search-results-button,
.sbx-custom__input::-webkit-search-results-decoration {
  display: none;
}

.sbx-custom__input:hover {
  box-shadow: inset 0 0 0 1px #e6e6e6;
}

.sbx-custom__input:focus,
.sbx-custom__input:active {
  outline: 0;
  box-shadow: inset 0 0 0 1px #8797ff;
  background: #ffffff;
}

.sbx-custom__input::-webkit-input-placeholder {
  color: #aaaaaa;
}

.sbx-custom__input::-moz-placeholder {
  color: #aaaaaa;
}

.sbx-custom__input:-ms-input-placeholder {
  color: #aaaaaa;
}

.sbx-custom__input::placeholder {
  color: #aaaaaa;
}

.sbx-custom__submit {
  position: absolute;
  top: 0;
  right: 0;
  left: inherit;
  margin: 0;
  border: 0;
  border-radius: 0 3px 3px 0;
  background-color: #8797ff;
  padding: 0;
  width: 47px;
  height: 100%;
  vertical-align: middle;
  text-align: center;
  font-size: inherit;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.sbx-custom__submit::before {
  display: inline-block;
  margin-right: -4px;
  height: 100%;
  vertical-align: middle;
  content: "";
}

.sbx-custom__submit:hover,
.sbx-custom__submit:active {
  cursor: pointer;
}

.sbx-custom__submit:focus {
  outline: 0;
}

.sbx-custom__submit svg {
  width: 21px;
  height: 21px;
  vertical-align: middle;
  fill: #202f40;
}

.sbx-custom__reset {
  display: none;
  position: absolute;
  top: 9px;
  right: 54px;
  margin: 0;
  border: 0;
  background: none;
  cursor: pointer;
  padding: 0;
  font-size: inherit;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  fill: rgba(0, 0, 0, 0.5);
}

.sbx-custom__reset:focus {
  outline: 0;
}

.sbx-custom__reset svg {
  display: block;
  margin: 4px;
  width: 13px;
  height: 13px;
}

.sbx-custom__input:valid ~ .sbx-custom__reset {
  display: block;
  -webkit-animation-name: sbx-reset-in;
  animation-name: sbx-reset-in;
  -webkit-animation-duration: 0.15s;
  animation-duration: 0.15s;
}

@-webkit-keyframes sbx-reset-in {
  0% {
    -webkit-transform: translate3d(-20%, 0, 0);
    transform: translate3d(-20%, 0, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes sbx-reset-in {
  0% {
    -webkit-transform: translate3d(-20%, 0, 0);
    transform: translate3d(-20%, 0, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}
</style>