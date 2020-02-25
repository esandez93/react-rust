extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
  fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
  let message = format!("Hello {} from WASM", name.to_string());
  alert(&message[..]);
}
