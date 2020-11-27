rm *.pem; \
openssl req -nodes -x509 -new -newkey rsa:2048 -keyout privkey.pem -out pubkey.pem -batch -subj /CN=my-admission-controller.kube-system.svc -extensions v3_ca -extensions subjectaltname -config openssl.cnf
