<?php
require __DIR__ . '/session.php';
require __DIR__ . '/db.php';

admin_session_start();
header('Content-Type: application/json');

if (empty($_SESSION['admin'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

echo json_encode(list_leads($pdo));
