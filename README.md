# Goal
PoC about using Rust inside a simple React project

## Things to take in account
* Install Rust tools
  * [Rust toolchain](https://www.rust-lang.org/tools/install)
  * [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)
  * [cargo-generate](https://rustwasm.github.io/docs/book/game-of-life/setup.html?highlight=cargo-get#cargo-generate)
* Run `wasm-pack build` from `lib` folder
* (For now) Change the import in the JS inside lib/pkg and add '.wasm' in the end of it
