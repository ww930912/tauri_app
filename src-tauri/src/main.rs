#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod menu;
mod tray;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .menu(menu::init(&context))
        .on_menu_event(menu::handler)
        .system_tray(tauri::SystemTray::default())
        // .system_tray(tray::menu())
        .on_system_tray_event(tray::handler)
        .run(context)
        .expect("error while running tauri application");
}
