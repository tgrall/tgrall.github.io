---
title: "VirtualBox: How to clone a virtual machine?"

categories:
---
During some testing I had to put in place a cluster on my network. So I create a first virtual machine. It is not possible to directly copy the Virtual Disk Image (.vdi). VirtualBox saved in each disk image a UUID that is also store inside the virtual machine image. VirtualBox does not support two images with the same number. So to clone the an image you need to use the `VBoxManage clonehd` command line.

The clonehd command copy the VDI file and assigns a new UUID into it.

``` Bash
VBoxManage  clonehd /opt/tools/vm/vm1-rhel.vdi  /opt/tools/vm/vm2-rhel.vdi
```

Once the copy is done, you can now register this new VDI in your VirtualBox environment and create a new virtual machine.

Note: I am running VirtualBox on MacOS X, and I needed to put complete path to VDI files, if not the command id not working

_Alternative approach_

Initially I had issue with the clonehd command since I was not using full path. So what you can do is:

``` bash
cp vm1-rhel.vdi vm2-rhel.vdi
VBoxManage internalcommands sethduuid vm2-rhel.vdi
```

You can now add the new VDI to your VirtualBox environment.
