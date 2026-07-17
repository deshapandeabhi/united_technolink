<?php
// SQLite lives one level inside the web root but is blocked from direct
// HTTP access by data/.htaccess (Deny/Require all denied).
$dataDir = __DIR__ . '/../data';
if (!is_dir($dataDir)) {
    mkdir($dataDir, 0755, true);
}

$pdo = new PDO('sqlite:' . $dataDir . '/leads.db');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$pdo->exec("
    CREATE TABLE IF NOT EXISTS leads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        source TEXT NOT NULL,
        name TEXT NOT NULL,
        email TEXT,
        phone TEXT,
        company TEXT,
        inquiry TEXT,
        message TEXT,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
");

function insert_lead(PDO $pdo, array $lead): void
{
    $stmt = $pdo->prepare("
        INSERT INTO leads (source, name, email, phone, company, inquiry, message)
        VALUES (:source, :name, :email, :phone, :company, :inquiry, :message)
    ");
    $stmt->execute([
        ':source'  => $lead['source'],
        ':name'    => $lead['name'],
        ':email'   => $lead['email']   ?? null,
        ':phone'   => $lead['phone']   ?? null,
        ':company' => $lead['company'] ?? null,
        ':inquiry' => $lead['inquiry'] ?? null,
        ':message' => $lead['message'] ?? null,
    ]);
}

function list_leads(PDO $pdo): array
{
    return $pdo->query("SELECT * FROM leads ORDER BY created_at DESC, id DESC")->fetchAll(PDO::FETCH_ASSOC);
}
