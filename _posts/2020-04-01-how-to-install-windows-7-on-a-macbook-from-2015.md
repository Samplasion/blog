---
title: "How to install Windows 7 on a MacBook from 2015"
slug: how-to-install-windows-7-on-a-macbook-from-2015
comment_id: 5e7b0e350feaf7007ba585c4
date: 2020-04-01T08:00:00.000Z
excerpt: "Today, I'm gonna write a guide about how to install Windows 7 on a MacBook Pro, Retina, 13-inch, early 2015. No, this is not an April Fools joke."
image: "/assets/images/2020/04/macbook-pro-windows-450x290.jpg"
tags: 
 - "Apple"
 - "Mac"
 - "Tutorial"
 - "Dual-Boot"
 - "Computer"
---

<p>Last week I posted <a href="/how-i-dual-booted-windows-10-and-windows-7-on-a-macbook-pro-retina-early-2015/">an article about my dual boot setup</a>. Today, I'm gonna write a guide about how to install Windows 7 on a MacBook Pro, Retina, 13-inch, early 2015. No, this is not an April Fools joke.</p><blockquote><strong>Important</strong>: As far as I'm aware, older MacBook Pros have the built-in capability of running Windows 7, while there's no way newer ones can even remotely think about it. If you're unsure if it's supported, please don't try this.</blockquote><!--kg-card-begin: html--><p>The things you need are:
<ul>
    <li>A Windows 7 ISO of your choice (must be 64-Bit, one of Professional, Enterprise or Ultimate).</li>
    <li>A macOS Install drive <b>or</b> a Time Machine partition (on an external hard drive is preferred).</li>
    <li>An 8GB or more pendrive.</li>
    <li>A copy of Apple's Bootcamp Drivers (version 5 is required for the Bootcamp Control Panel to work).</li>
    <li>Another computer with Windows on it <b>or</b> Windows on your computer.</li>
    <li>A Windows 7 Product Key or another activation method (unsupported if using Ultimate, so stick with the key).</li>
    <li><a href="https://github.com/davidcie/VgaShim/releases/download/v0.97/VgaShim-v0.97.zip">VGAShim</a>.</li>
    <li><a href="https://downloadcenter.intel.com/downloads/eula/22824/Intel-USB-3-0-eXtensible-Host-Controller-Driver-for-Intel-8-9-100-Series-and-Intel-C220-C610-Chipset-Family?httpDown=https%3A%2F%2Fdownloadmirror.intel.com%2F22824%2Feng%2FIntel%28R%29_USB_3.0_eXtensible_Host_Controller_Driver_5.0.4.43_v2.zip">Intel's USB 3.0 Drivers</a>.</li>
    <li><a href="http://thehotfixshare.net/board/index.php?s=a1e22ca0322dae299e6c6ecb16cc7075&autocom=downloads&req=download&code=confirm_download&id=16296">Hotfix KB2775511</a>.</li>
    <li><a href="https://mega.nz/#!l8BEgIAQ!Uo8VEWD18oD_RqxW0GhWt8olJmzCRHaMBs3ZS9SKfDA">do_boot.wim.bat</a>.</li>
    <li><a href="https://mega.nz/#!koY2UKrI!H4n3R4VrgnS5HlmD-kQZohHm4w0qihYeKZNiptxXyhg">do_install.wim.bat</a>.</li>
    <li><a href="https://drive.google.com/file/d/0Bxq--onVE9j5T1dNY3BlRWxEZms/view?usp=sharing">The Wi-Fi drivers</a> (<b>for MacBook Pro 13" early 2015 only!</b>).</li>
    <li><a href="https://downloadcenter.intel.com/product/80939/Graphics-Drivers">The Graphics Driver for your CPU</a>.</li>
</ul></p><!--kg-card-end: html--><!--kg-card-begin: markdown--><p>First, prepare the installation disk. From Windows:</p>
<ol>
<li>Create <code>C:\inject</code>, <code>C:\inject\drivers</code> and <code>C:\inject\hotfixes</code>.</li>
<li>Copy the Hotfix KB2775511 to <code>C:\inject\hotfixes</code> (don't rename it).</li>
<li>Unzip the USB 3.0 Drivers and copy <code>USB 3.0 Drivers\Drivers\HCSwitch\x64</code> and <code>USB 3.0 Drivers\Drivers\Win7\x64</code> to <code>C:\inject\drivers</code>.</li>
<li>Open the Windows 7 ISO and copy <code>ISO:\sources\boot.wim</code> and <code>ISO:\sources\install.wim</code> to <code>C:\inject</code>.</li>
<li>Move <code>do_boot.wim.bat</code> and <code>do_install.wim.bat</code> to <code>C:\inject</code>.</li>
</ol>
<!--kg-card-end: markdown--><!--kg-card-begin: markdown--><p>The structure is ready. Take note of your <code>boot.wim</code> and <code>install.wim</code>. They'll be useful later. Format the pendrive with your favorite software as: GPT, Fat32.</p>
<ol>
<li>Run <code>do_boot.wim.bat</code> as administrator.</li>
<li>Run <code>do_install.wim.bat</code> as administrator. Select the version of Windows 7 you want to install.</li>
<li>Check that <code>C:\Users\&lt;yourname&gt;\Desktop\bootmgfw.efi</code> exists.</li>
<li>Check that <code>C:\inject\boot.wim</code> and <code>C:\inject\install.wim</code> both increased by about 9-10 MB in size.</li>
</ol>
<!--kg-card-end: markdown--><!--kg-card-begin: markdown--><p>Now, prepare the pendrive.</p>
<ol>
<li>Extract the contents of the ISO into the pendrive.</li>
<li>Copy <code>boot.wim.bat</code> and <code>install.wim.bat</code> from <code>C:\inject</code> to <code>PENDRIVE:\sources</code>.</li>
<li>Copy <code>C:\Users\&lt;yourname&gt;\Desktop\bootmgfw.efi</code> to <code>PENDRIVE:\efi\microsoft\boot</code>.</li>
<li>Create <code>PENDRIVE:\efi\boot</code>.</li>
<li>Copy <code>VgaShim.efi</code> and <code>VgaShim.bmp</code> to <code>PENDRIVE:\efi\boot</code>. Rename them, respectfully, <code>bootx64.efi</code> and <code>bootx64.bmp</code>.</li>
<li>Copy the Wi-Fi drivers to <code>PENDRIVE:\</code>.</li>
<li>Copy the graphics driver to <code>PENDRIVE:\</code>.</li>
</ol>
<!--kg-card-end: markdown--><!--kg-card-begin: markdown--><p>Create a NTFS partition for Windows 7 with the software of your choice, then boot into the pendrive and install Windows into that partition. When it's done, boot into the macOS Install Drive/Time Machine partition.</p>
<ol>
<li>Open Terminal.</li>
<li>Type <code>mkdir /Volumes/ESP</code>.</li>
<li>Type <code>diskutil list</code> and identify the ESP (I'll use <code>/dev/disk0s1</code>).</li>
<li>Type <code>mount -t msdos /dev/disk0s1 /Volumes/ESP</code>.</li>
<li>Type <code>cp -rf /Volumes/PENDRIVE/efi/boot /Volumes/ESP/efi/</code> where <code>PENDRIVE</code> is the name of your pendrive.</li>
<li>Type <code>cp -f /Volumes/PENDRIVE/efi/microsoft/boot/bootx64.* /Volumes/ESP/EFI/microsoft/boot</code> where <code>PENDRIVE</code> is the name of your pendrive.</li>
<li>(If SIP is enabled) Type <code>csrutil disable</code>.</li>
<li>(If SIP is enabled) Reboot into the macOS Install Drive/Time Machine partition</li>
<li>Type <code>sudo bless --mount /Volumes/ESP --setBoot</code>.</li>
<li>Reboot.</li>
</ol>
<!--kg-card-end: markdown--><p>Complete the configuration of Windows. When you're on the Desktop, install the Wi-Fi drivers and the graphics driver. This will set a resolution that's good for your computer. Open Control Panel -&gt; Display and select a resolution that's half the width and half the height. This will allow you to read.</p><!--kg-card-begin: markdown--><p>Install all the drivers in <code>Bootcamp Drivers\Bootcamp\Drivers\Apple</code> and <code>Bootcamp Drivers\Bootcamp\Drivers\Broadcom</code>. Install WinRAR. Copy <code>Bootcamp Drivers\Bootcamp\Drivers\Apple\AppleMultiTouchTrackPadInstaller64.exe</code> and <code>Bootcamp Drivers\Bootcamp\Drivers\Apple\AppleKeyboardInstaller64.exe</code> to your desktop, and open them with WinRAR. Extract them in their respective folders on your desktop.</p>
<p>Open an administrative Command Prompt window.</p>
<ol>
<li>Type <code>bcdedit.exe -set TESTSIGNING ON</code>.</li>
<li>Type <code>bcdedit.exe -set nointegritychecks ON</code>.</li>
<li>Type <code>bcdedit.exe -set loadoptions DDISABLE_INTEGRITY_CHECKS</code>.</li>
<li>Type <code>bcdedit.exe -set nointegritychecks ON</code> again.</li>
<li>Close out of the window.</li>
</ol>
<p>Press CMD+R and type <code>gpedit.msc</code>.</p>
<ol>
<li>Navigate to <code>User Config/Administrative Templates/System/Driver Installation</code>.</li>
<li>Find <code>Code Signing for Devices Drivers</code>.</li>
<li>Double-click it and select <strong>Disable</strong>.</li>
<li>Click <strong>Apply</strong> and then <strong>OK</strong>.</li>
<li>Close out of the window.</li>
</ol>
<p>Restart. Press F8 until yellow text appears. Press enter, then immediately press F8 again. Select <strong>Disable Driver Integrity Checks</strong>.</p>
<p>Open an administrative Command Prompt window.</p>
<ol>
<li>Type <code>cd C:\Users\%USERPROFILE%\Desktop\AppleMultiTouchTrackPadInstaller64</code>.</li>
<li>Type <code>DPinst.exe /f /LM</code>.</li>
<li>Install the drivers.</li>
<li>Type <code>cd ..\AppleKeyboardInstaller64</code>.</li>
<li>Type <code>DPinst.exe /f /LM</code>.</li>
<li>Install the drivers.</li>
</ol>
<!--kg-card-end: markdown--><p>Reboot one last time. Congratulations! Your Windows 7 system is ready!</p><p><strong>Credits </strong>(I took inspiration from their guides).</p><figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="https://forums.macrumors.com/threads/guide-install-windows-7-in-macbook-pro-early-2015-with-almost-fully-support-include-track-pad.1992139/post-23333066"><div class="kg-bookmark-content"><div class="kg-bookmark-title">[GUIDE] Install Windows 7 in MacBook Pro Early 2015 with almost fully support(include track pad)!!</div><div class="kg-bookmark-description">Apple has shut down the support for Win7 in the newest Macs, What if you still want it? How to install Windows 7 in a Early 2015 MBP with 99% support P.S The way to install Windows 7(I mean just put in into your disk) I introduce is the fastest way I can find, and it’s sort of unpredictable...</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="https://cdn.macrumors.com/images-new/favicon.ico"><span class="kg-bookmark-author">tl166115</span><span class="kg-bookmark-publisher">MacRumors Forums</span></div></div><div class="kg-bookmark-thumbnail"><img src="http://cdn.macrumors.com/article-new/2019/10/macrumors-forums-social.jpg"></div></a></figure><figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="https://forums.macrumors.com/threads/guide-install-windows-7-on-air-2015.1961618/post-22677864"><div class="kg-bookmark-content"><div class="kg-bookmark-title">[GUIDE] Install Windows 7 on Air 2015</div><div class="kg-bookmark-description">Foreword As far as I am aware this is the first successful attempt at getting Windows 7 to natively run on Air Early 2015.
What I present here really is a case of standing on the shoulders of giants and would not be even remotely possible without several projects and individuals credited at the...</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="https://cdn.macrumors.com/images-new/favicon.ico"><span class="kg-bookmark-author">davidcie</span><span class="kg-bookmark-publisher">MacRumors Forums</span></div></div><div class="kg-bookmark-thumbnail"><img src="http://cdn.macrumors.com/article-new/2019/10/macrumors-forums-social.jpg"></div></a></figure><p>Of course, if you have any problem, don't hesitate to tell me down below. See ya next time!</p>