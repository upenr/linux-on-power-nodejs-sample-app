# Node.js Application on IBM Power

A sample Node.js application deployed with Ansible on Linux on IBM Power.

The application returns information about the managed system, including its hostname, platform, processor architecture, and Node.js version.

## Run locally

```bash
npm install
npm start
```

Open another terminal and test the application:

```bash
curl http://localhost:3000
```

## Deploy with Ansible

The course playbook performs the following tasks:

- Installs Node.js and Git
- Clones this GitHub repository
- Installs the application dependencies
- Copies a systemd service file
- Enables and starts the application

The application runs as the following systemd service:

```text
qzc51g-nodeapp
```

Check its status:

```bash
systemctl status qzc51g-nodeapp
```

View its recent logs:

```bash
journalctl -u qzc51g-nodeapp -n 10 --no-pager
```

## Course

This application supports the IBM technical training course [QZC51G: Ansible on IBM Power Workshop](https://www.ibm.com/training/course/ansible-on-ibm-power-workshop-QZC51G).