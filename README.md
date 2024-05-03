# Use Ansible to run a Node.js Application on IBM Power (ppc64le)

This is a sample Node.js application that will run on a Linux VM on IBM Power (ppc64le)

## Get started using Ansible 💻

- Use the following Ansible Playbook to run this application

```bash
---
- name: Run a sample Node.js Application on Linux on IBM Power
  hosts: <your-hosts>
  gather_facts: true

  vars:
    work_dir: '/tmp/linux-on-power-nodejs-sample-app'
    forever_dir: '/tmp/linux-on-power-nodejs-sample-app/node_modules/forever/bin'

  tasks:
    - name: Install Node.js
      package:
        name: nodejs
        state: present

    - name: Install Git
      package:
        name: git
        state: present

    - name: Clone repository
      git:
        repo: 'https://github.com/upenr/linux-on-power-nodejs-sample-app.git'
        dest: '{{work_dir}}'

    - name: Install all Node.js dependencies including the Forever package
      shell: 'npm install'
      args:
        chdir: '{{work_dir}}'

    - name: Check list of running Node.js apps using the Forever package
      command: '{{forever_dir}}/forever list'
      register: forever_list
      changed_when: false

    - name: Start our Node.js app using the Forever package
      command: '{{forever_dir}}/forever start {{work_dir}}/index.js'
      when: "forever_list.stdout.find('index.js') == -1"
      args:
        chdir: '{{work_dir}}'
```

## Package dependencies

```
Http
Forever
```

## Enroll in a course that teaches you more Ansible!

- [Ansible on IBM Power](https://ibm.com/training/course/QZC51G)