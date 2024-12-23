import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import UploadTool from "@/components/UploadTool";

export default function SettingsTab({
  avatarUrl,
  setAvatarUrl,
  avatarName,
  setAvatarName,
  avatarUserName,
  setAvatarUserName,
  avatarEnabled,
  setAvatarEnabled,
  avatarNameEnabled,
  setAvatarNameEnabled,
  avatarUserNameEnabled,
  setAvatarUserNameEnabled,
  avatarPosition,
  setAvatarPosition,
}: {
  avatarUrl: string;
  setAvatarUrl: (value: string) => void;
  avatarName: string;
  setAvatarName: (value: string) => void;
  avatarUserName: string;
  setAvatarUserName: (value: string) => void;
  avatarEnabled: boolean;
  setAvatarEnabled: (value: boolean) => void;
  avatarNameEnabled: boolean;
  setAvatarNameEnabled: (value: boolean) => void;
  avatarUserNameEnabled: boolean;
  setAvatarUserNameEnabled: (value: boolean) => void;
  avatarPosition: string;
  setAvatarPosition: (value: string) => void;
}) {
  return (
    <div className="space-y-6 bg-muted border shadow-md p-4 rounded-lg h-full">
      <h3 className="text-base font-semibold">Settings</h3>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Headshot</span>
          <Switch checked={avatarEnabled} onCheckedChange={setAvatarEnabled} />
        </div>
        {avatarEnabled && (
          <UploadTool
            // label="Background Image"
            value={avatarUrl}
            onChange={setAvatarUrl}
            placeholder="https://via.placeholder.com/40"
          />
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Name</span>
          <Switch
            checked={avatarNameEnabled}
            onCheckedChange={setAvatarNameEnabled}
          />
        </div>
        <Input
          type="text"
          value={avatarName}
          onChange={(e) => setAvatarName(e.target.value)}
          placeholder="Test User"
          className="bg-background"
          disabled={!avatarNameEnabled}
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">LinkedIn Handle</span>
          <Switch
            checked={avatarUserNameEnabled}
            onCheckedChange={setAvatarUserNameEnabled}
          />
        </div>
        <Input
          type="text"
          value={avatarUserName}
          onChange={(e) => setAvatarUserName(e.target.value)}
          placeholder="test"
          className="bg-background"
          disabled={!avatarUserNameEnabled}
        />
      </div>
    </div>
  );
}
