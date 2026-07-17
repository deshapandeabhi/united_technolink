<?php
function admin_session_start(): void
{
    session_set_cookie_params([
        'lifetime' => 12 * 60 * 60,
        'path' => '/',
        'httponly' => true,
        'samesite' => 'Lax',
        'secure' => isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
    ]);
    session_start();
}
