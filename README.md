# What is this project

1. A git server can be based on protocol of http or ssh.
2. Can config each repo with more info, such as permission, description...

# How to run this project

**Create user git, place this project(and dir repositories for locating all repos) at the HOME path of user git.**
**Write the following config to repositories/git-admin.git/hooks**
```
unset GIT_DIR
cd /home/git/git-admin
git pull origin master
```
then after git-admin.git is refreshed by code push, the code under dir `/home/git/git-admin` can be refreshed either.

**Add commond for customer by writing the following command to .ssh/authorized_keys**

command="/home/git/git-admin/bin/git-server-by-ssh.js sduwxf@qq.com ef296e1131fac75de800bf8cf374cc27",no-port-forwarding,no-X11-forwarding,no-agent-forwarding,no-pty ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDgAFkQM7Ki2XrIlpt2n5L8inWB6AZ2IWvIy7cZAA+VAP9bM1LLktSo2WOB+RyyZVViRf3a9MOolRjsbQYGZW85o4ivZYlredSw6jK6Qd7Kb1/STKabhxPLibW4/VPnFyfddIBbxalb4kxnTh2VYwsqPn43yDoFbMTLeZqGK0W7f+e/CJbWCjvQVFUw82uOe+V+DvqWie9cs25YQGEOKN8FI/88XdrTtNRTAGUmmhSnn2Jqr6qR9E7VpGHgWTEkaweNGQCF48fXK9etmmUaAtoIDj+5C48+Zp3WwV5qnvIMrv1RAE3YNYpqI06Lj5vfAOIWTLd84FGSHzGWmCO2tUfb sduwxf@qq.com

# About config.js

We can config repo in file `config.js`, repoes are organized in tree using following structure:

```
node					// 一级目录，以node为例
├── start				// 入门及学习的记录，总结
│ ├── ts 				// 使用ts语法实现的demo
│ ├── summary 			// 常用逻辑总结
│ └── ...				// 等
├── vendor				// 值得长期跟踪的优秀的三方代码，或者定制化较多的三方代码
│ ├── socksv5			// socksv5的node实现
│ ├── formidable		// 实现解析http post请求
│ ├── snabbdom			// vue做tree diff的代码逻辑
│ └── ...				// 等
├── module				// 跨项目的公用逻辑
│ ├── libs				// 公用代码
│ └── ...				// 等
├── project				// 自己开发的完成特定功能的项目
│ ├── stable			// 已经稳定的项目
│ │   ├── git-admin		// git仓库管理程序
│ │   └── ...			// 等
│ ├── obsolete			// 过时或使用频率很低，可被随时删除的项目
│ │   ├── proxy-server	// 辅助完美邮箱开发的node服务
│ │   └── ...			// 等
│ ├── spa-server		// spa项目后端服务，但有些细节没有想通，没有达到stable的状态
│ └── ...				// 等
├── webpack				// 如果vendor项目比较多，可以将相关项目归类的一个文件夹（如，展示webpack功能的相关项目）
│ ├── ruanyf			// 一个展示基本的webpack使用方式的项目
│ └── ...				// 等
└── ...					// 其它自定义文件夹
```

### About acme

acme.sh是一个开源的实现的https签名的项目，它通过调用dns提供的接口，在指定域名上加上TXT信息，并进行校验，证明域名所有权后，Let's Encrypt进行签名并返回证书。

相关项目：
bash/vendor/acme.sh，fork自github，添加了”在指定域名上加上TXT信息“的逻辑
pwrd/assist，提供了金山云88dev.cn dns的接口调用，通过node_module axios进行网络请求
