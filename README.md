# TODO

- Reject attempts to delete, create or patch
  - the Service objects whose name start with "vpsi-protected-"
  - the Endpoint objects  whose name start with "vpsi-protected-"
  - the ValidatingWebhookConfiguration of the name we decide

- Reject attempts to create or patch
  - PersistentVolumes
  - StorageClass → doit pointer vers un ResourceQuota
  - LoadBalancers
  - NodePorts

# Regenerate certificates

```
rm *.pem; \
openssl req -nodes -x509 -new -newkey rsa:2048 -keyout privkey.pem -out pubkey.pem -batch -subj /CN=my-admission-controller.kube-system.svc -extensions v3_ca -extensions subjectaltname -config openssl.cnf
