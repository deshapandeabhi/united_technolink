<?php
require __DIR__ . '/db.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true) ?? [];

$source = trim((string) ($input['source'] ?? ''));
$name = trim((string) ($input['name'] ?? ''));

if ($source === '' || $name === '') {
    http_response_code(400);
    echo json_encode(['error' => 'source and name are required']);
    exit;
}

insert_lead($pdo, [
    'source'  => $source,
    'name'    => $name,
    'email'   => $input['email'] ?? null,
    'phone'   => $input['phone'] ?? null,
    'company' => $input['company'] ?? null,
    'inquiry' => $input['inquiry'] ?? null,
    'message' => $input['message'] ?? null,
]);

http_response_code(201);
echo json_encode(['ok' => true]);
