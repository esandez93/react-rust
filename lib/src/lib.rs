extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
  fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
  let message = format!("Hello {} from WASM", name);
  alert(&message[..]);
}

#[wasm_bindgen]
pub fn long_loop(times: i32) {
  let mut z = 0;

  for _x in 0..times {
    z = z + 2;
  }
}
