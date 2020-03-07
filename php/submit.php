
		<?php
		
			if ($_SERVER['REQUEST_METHOD'] == 'POST'){
				$data_file = fopen("../Submits.txt", 'a');
				$name = $_POST['name'];
				$email = $_POST['email'];
				$service = $_POST['service'];
				$subject = $_POST['subject'];
				$text = "Name: " . $name . "\nEmail: ". $email . "\nRequested Service: " . $service . " \nDescription:\n" . $subject ."\n\n";
				fwrite($data_file, $text);
				fclose($data_file);
			} 

			header("Location: ../index.html");
			exit();
		?>
