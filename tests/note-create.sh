 apig-test \
--username='admin@example.com' \
--password='Passw0rd!' \
--user-pool-id='us-east-1_ql58aKgir' \
--app-client-id='5d1b1pop2i78qid6c6j83thgto' \
--cognito-region='us-east-1' \
--identity-pool-id='us-east-1:2be15265-4b74-4772-a146-bc4e32c6464a' \
--invoke-url='https://llmjysubbc.execute-api.us-east-1.amazonaws.com/prod' \
--api-gateway-region='us-east-1' \
--path-template='/notes' \
--method='POST' \
--body='{"content":"hello world","attachment":"hello.jpg"}'