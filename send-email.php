<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);

$mail = new PHPMailer(true);

try {

    $mail->isSMTP();

    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;

    $mail->Username   = 'EMAILRAMANISA@gmail.com';
    $mail->Password   = 'APP_PASSWORD_GMAIL';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom(
        'EMAILRAMANISA@gmail.com',
        'Ramanisa White Website'
    );

    $mail->addAddress(
        'EMAILRAMANISA@gmail.com'
    );

    $mail->addReplyTo(
        $data['email'],
        $data['name']
    );

    $mail->isHTML(true);

    $mail->Subject = 'Request Proposal - Ramanisa White';

    $mail->Body = "

        <h2>Request Proposal Baru</h2>

        <p>
        <strong>Nama:</strong>
        {$data['name']}
        </p>

        <p>
        <strong>Perusahaan:</strong>
        {$data['company']}
        </p>

        <p>
        <strong>Email:</strong>
        {$data['email']}
        </p>

        <p>
        <strong>WhatsApp:</strong>
        {$data['phone']}
        </p>

        <hr>

        <h3>Media Plan</h3>

        <pre>
        ".htmlspecialchars(
            json_encode(
                $data['mediaPlan'],
                JSON_PRETTY_PRINT
            )
        )."
        </pre>

        <hr>

        <p>
        <strong>Catatan:</strong>
        {$data['message']}
        </p>

    ";

    $mail->send();

    echo json_encode([
        "success" => true
    ]);

} catch(Exception $e){

    echo json_encode([
        "success" => false,
        "message" => $mail->ErrorInfo
    ]);

}