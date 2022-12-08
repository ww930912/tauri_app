#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
mod command;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            greet,
            command::get_url_id,
            command::get_video_info_by_id,
            command::get_video_full_info_by_id,
            command::download_video,
            command::get_user_info_by_url,
            command::get_user_full_info_by_url,
            command::get_list_by_user_id,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
